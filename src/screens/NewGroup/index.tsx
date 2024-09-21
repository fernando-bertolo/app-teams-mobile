import { Header } from "@components/header";
import * as S from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton/>

      <S.Content>
        <S.Icon/>
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
        />
        
      </S.Content>

    </S.Container>
  );
}