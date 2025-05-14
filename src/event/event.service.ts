import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { RegisterAttendanceDto } from './dto/register-attendance.dto';

export interface Attendance {
  id: string;
  name: string;
  email: string;
  eventId: string;
  hasAttended: boolean;
}

@Injectable()
export class EventService {
  private attendances: Attendance[] = [];

  registerAttendance(registerDto: RegisterAttendanceDto): Attendance {
    // Simulate identity verification
    if (
      this.attendances.some(
        (a) =>
          a.email === registerDto.email && a.eventId === registerDto.eventId,
      )
    ) {
      throw new BadRequestException('User already registered for this event');
    }

    const attendance: Attendance = {
      id: Math.random().toString(36).substr(2, 9),
      ...registerDto,
      hasAttended: false,
    };

    this.attendances.push(attendance);
    return attendance;
  }

  markAttendance(email: string, eventId: string): Attendance {
    const attendance = this.attendances.find(
      (a) => a.email === email && a.eventId === eventId,
    );

    if (!attendance) {
      throw new NotFoundException('Registration not found');
    }

    attendance.hasAttended = true;
    return attendance;
  }

  getAttendanceSummary(eventId: string) {
    const eventAttendances = this.attendances.filter(
      (a) => a.eventId === eventId,
    );

    return {
      total: eventAttendances.length,
      attended: eventAttendances.filter((a) => a.hasAttended).length,
      absent: eventAttendances.filter((a) => !a.hasAttended).length,
      details: eventAttendances,
    };
  }
}
