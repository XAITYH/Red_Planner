import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class PomodoroSessionDto {
    @IsBoolean()
    @IsOptional()
    isCompleted: boolean
}

export class PomodoroRoundDto {
    @IsNumber()
    totalSeconds: number

    @IsOptional()
    @IsBoolean()
    isCompleted: boolean
}