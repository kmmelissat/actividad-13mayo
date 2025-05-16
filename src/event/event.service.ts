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

export interface Event {
  id: string;
  name: string;
  date: Date;
  location: string;
  description: string;
}

@Injectable()
export class EventService {
  private events: Event[] = [
    {
      id: '1',
      name: 'Concierto de Taylor Swift',
      date: new Date('2025-05-20T19:00:00'),
      location: 'Estadio Cuscatlan',
      description: 'Concierto de Taylor Swift',
    },
    {
      id: '2',
      name: 'Concierto de Ed Sheeran',
      date: new Date('2025-05-25T20:00:00'),
      location: 'Estadio Cuscatlan',
      description: 'Concierto de Ed Sheeran',
    },
    {
      id: '3',
      name: 'Concierto de Bad Bunny',
      date: new Date('2025-06-01T21:00:00'),
      location: 'Estadio Cuscatlan',
      description: 'Concierto de Bad Bunny',
    },
  ];

  private attendances: Attendance[] = [
    {
      id: '1',
      name: 'Melissa Solorzano',
      email: 'melissa@example.com',
      eventId: '1',
      hasAttended: true,
    },
    {
      id: '2',
      name: 'Rene Morataya',
      email: 'rene@example.com',
      eventId: '1',
      hasAttended: false,
    },
    {
      id: '3',
      name: 'Julio Contreras',
      email: 'julio@example.com',
      eventId: '1',
      hasAttended: true,
    },
    {
      id: '4',
      name: 'Ana Martínez',
      email: 'ana@example.com',
      eventId: '2',
      hasAttended: true,
    },
    {
      id: '5',
      name: 'Carlos Rodríguez',
      email: 'carlos@example.com',
      eventId: '2',
      hasAttended: true,
    },
    {
      id: '6',
      name: 'Laura Sánchez',
      email: 'laura@example.com',
      eventId: '2',
      hasAttended: false,
    },
    {
      id: '7',
      name: 'Pedro Gómez',
      email: 'pedro@example.com',
      eventId: '2',
      hasAttended: false,
    },
    {
      id: '8',
      name: 'María López',
      email: 'maria@example.com',
      eventId: '3',
      hasAttended: true,
    },
    {
      id: '9',
      name: 'Juan Pérez',
      email: 'juan@example.com',
      eventId: '3',
      hasAttended: true,
    },
    {
      id: '10',
      name: 'Sofía Torres',
      email: 'sofia@example.com',
      eventId: '3',
      hasAttended: false,
    },
    {
      id: '11',
      name: 'Diego Ramírez',
      email: 'diego@example.com',
      eventId: '3',
      hasAttended: false,
    },
  ];

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: string): Event {
    const event = this.events.find((e) => e.id === id);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  getEventAttendees(eventId: string) {
    // First check if event exists
    const event = this.events.find((e) => e.id === eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const attendees = this.attendances.filter((a) => a.eventId === eventId);
    const attended = attendees.filter((a) => a.hasAttended);
    const registered = attendees.filter((a) => !a.hasAttended);

    return {
      event: event,
      total: attendees.length,
      attended: {
        count: attended.length,
        list: attended.map((a) => ({
          name: a.name,
          email: a.email,
          hasAttended: a.hasAttended,
        })),
      },
      registered: {
        count: registered.length,
        list: registered.map((a) => ({
          name: a.name,
          email: a.email,
          hasAttended: a.hasAttended,
        })),
      },
    };
  }

  registerAttendance(
    eventId: string,
    registerDto: RegisterAttendanceDto,
  ): Attendance {
    // First check if the event exists
    const event = this.events.find((e) => e.id === eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    // Then check if user is already registered
    if (
      this.attendances.some(
        (a) => a.email === registerDto.email && a.eventId === eventId,
      )
    ) {
      throw new BadRequestException('User already registered for this event');
    }

    const attendance: Attendance = {
      id: Math.random().toString(36).substr(2, 9),
      ...registerDto,
      eventId,
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
