import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { UserGoal } from './user-goal.enum';
import { ActivityLevel } from './user-activity-level.enum';
<<<<<<< HEAD

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}


=======
import { WorkoutGoal } from '../../workout/enums/workout.goal';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186
export class UpdateProfileDto {
  @ApiProperty({
    enum: Gender,
    enumName: 'Gender',
    description: 'The gender of the user',
    example: Gender.MALE,
    type: String,
  })
<<<<<<< HEAD
  @IsEnum(Gender)  
  @IsString() 
  gender: Gender;   

=======
  @IsEnum(Gender)
  @IsString()
  gender: Gender;
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186

  @ApiProperty({
    description: 'The age of the user',
    example: 30,
    type: Number,
  })
  @IsNumber()
  age: number;

<<<<<<< HEAD
    @ApiProperty({
=======
  @ApiProperty({
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186
    description: 'The weight of the user in kg',
    example: 70,
    type: Number,
  })
  @IsNumber()
  weight: number;

<<<<<<< HEAD

    @ApiProperty({
=======
  @ApiProperty({
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186
    description: 'The height of the user in cm',
    example: 175,
    type: Number,
  })
  @IsNumber()
  height: number;

<<<<<<< HEAD
    @ApiProperty({
        enum: UserGoal,
        enumName: 'UserGoal',
        description: 'The fitness goal of the user',
        example: UserGoal.LOSE_WEIGHT,
        type: String,
    })
  @IsEnum(UserGoal)
  goal: UserGoal;

=======
  @ApiProperty({
    enum: WorkoutGoal,
    enumName: 'WorkoutGoal',
    description: 'The fitness goal of the user',
    example: WorkoutGoal.LOSE_WEIGHT,
    type: String,
  })
  @IsEnum(WorkoutGoal)
  goal: WorkoutGoal;
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186

  @ApiProperty({
    enum: ActivityLevel,
    enumName: 'ActivityLevel',
    description: 'The activity level of the user',
    example: ActivityLevel.BEGINNER,
    type: String,
  })
<<<<<<< HEAD
    @IsEnum(ActivityLevel)
  activityLevel: ActivityLevel;



}

=======
  @IsEnum(ActivityLevel)
  activityLevel: ActivityLevel;
}
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186
