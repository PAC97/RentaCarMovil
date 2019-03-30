import { DatetimeOptions } from '@ionic/core';

export interface Task {
    EstadoID: number;
    nombre: string;
}
export interface Reserva {
    ReservaID: number;
    VehiculoID: number;
    FechaEN: string;
    FechaDev: string;
    HoraDev: string;
    EstadoID: string;
    
}
