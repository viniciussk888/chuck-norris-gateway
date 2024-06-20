import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class JokeDTO {
  @ApiProperty({description: "Categorias", example: "[dev, animal]"})
  @IsString()
  categories?: string[];

  @ApiProperty({
    description: "data criação da piada",
    example: "2020-01-05 13:42:19.324003"
  })
  @IsString()
  created_at?: string;

  @ApiProperty({
    description: "url do icone",
    example: "https://api.chucknorris.io/img/avatar/chuck-norris.png"
  })
  @IsString()
  icon_url?: string;

  @ApiProperty({description: "id", example: "CzoEfJ6WSqCpgdO6VTQrpw"})
  @IsString()
  id?: string;

  @ApiProperty({
    description: "data modificação da piada",
    example: "2020-01-05 13:42:19.324003"
  })
  @IsString()
  updated_at?: string;

  @ApiProperty({
    description: "link da piada",
    example: "https://api.chucknorris.io/jokes/CzoEfJ6WSqCpgdO6VTQrpw"
  })
  @IsString()
  url?: string;

  @ApiProperty({
    description: "Texto da piada",
    example: "Chuck Norris originally appeared"
  })
  @IsString()
  value?: string;
}
