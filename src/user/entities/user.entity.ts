/* eslint-disable prettier/prettier */
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

export type Gender = "kobieta" | "mężczyzna" | "-";
export type DietPurpose = "spadek wagi" | "utrzymanie wagi" | "przyrost wagi" | "-";
export type PhysicalActivity = "brak ćwiczeń" | "znikoma" | "mała" | "umiarkowana" | "duża" | "bardzo duża" | "-";

@Entity({ name : 'users' })
export class UserModel{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ default : "defaultUser" })
    userImage: string;
    
    @Column({ unique : true })
    userName: string;
    
    @Column({ unique : true })
    email: string;
    
    @Column({ unique : true })
    password: string;
    
    @Column()
    age: number; 
    
    @Column({
        type: 'enum',
        enum: ["kobieta", "mężczyzna", "-"],
        default: "-"
      })
    gender: Gender;
    
    @Column()
    weight: number;

    @Column()
    height: number;
    
    @Column({
        type: 'enum',
        enum: ["spadek wagi", "utrzymanie wagi", "przyrost wagi", "-"],
        default: "-"
      })
    dietPurpose: DietPurpose;
        
    @Column({
        type: 'enum',
        enum: [
            "brak ćwiczeń", "znikoma", "mała", "umiarkowana",
            "duża", "bardzo duża", "-"],
        default: "-"
      })
    physicalActivity: PhysicalActivity;
    
    @Column({ default : 0 })
    BMI: number;
        
    @Column({ default : 0 })
    caloricDemand: number;
    
    @Column({ default : 0 })
    proteinsDemand: number;
    
    @Column({ default : 0 })
    fatsDemand: number;
    
    @Column({ default : 0 })
    carbohydratesDemand: number;
}