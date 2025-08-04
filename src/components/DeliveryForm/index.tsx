import { FormikProps } from 'formik'
import ErrorText from '../ErrorText'
import {
  Label,
  Input,
  DoubleInput,
  FormButtons,
  Title,
  ButtonForm
} from './styles'
import InputMask from 'react-input-mask'

interface DeliveryFormValues {
  nome: string
  rua: string
  cidade: string
  cep: string
  numero: string
  complemento: string
}

interface DeliveryFormProps {
  formik: FormikProps<DeliveryFormValues>
  onBack: () => void
  onNext?: () => void
}

const DeliveryForm = ({ formik, onBack, onNext }: DeliveryFormProps) => (
  <>
    <Title>Entrega</Title>

    <form
      onSubmit={(e) => {
        e.preventDefault()
        formik.handleSubmit()
        if (formik.isValid && onNext) {
          onNext()
        }
      }}
    >
      <Label>
        Quem irá receber
        <Input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={formik.values.nome}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={formik.touched.nome && !!formik.errors.nome}
        />
      </Label>

      <Label>
        Endereço
        <Input
          type="text"
          name="rua"
          placeholder="Rua"
          value={formik.values.rua}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={formik.touched.rua && !!formik.errors.rua}
        />
      </Label>

      <Label>
        Cidade
        <Input
          type="text"
          name="cidade"
          value={formik.values.cidade}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasError={formik.touched.cidade && !!formik.errors.cidade}
        />
      </Label>

      <DoubleInput>
        <Label>
          CEP
          <InputMask
            mask="99999-999"
            name="cep"
            value={formik.values.cep}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
              <Input
                {...inputProps}
                hasError={formik.touched.cep && !!formik.errors.cep}
                className="fixed-input"
              />
            )}
          </InputMask>
        </Label>
        <Label>
          Número
          <Input
            type="number"
            name="numero"
            value={formik.values.numero}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={formik.touched.numero && !!formik.errors.numero}
          />
        </Label>
      </DoubleInput>

      <Label>
        Complemento (opcional)
        <Input
          type="text"
          name="complemento"
          placeholder="Apto, bloco, etc"
          value={formik.values.complemento}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Label>
      {formik.submitCount > 0 && !formik.isValid && (
        <ErrorText>Campos obrigatórios não preenchidos</ErrorText>
      )}
      <FormButtons>
        <ButtonForm title="Continuar com o pagamento" type="submit">
          Continuar com o pagamento
        </ButtonForm>
        <ButtonForm
          title="Voltar para o carrinho"
          type="button"
          onClick={onBack}
        >
          Voltar para o carrinho
        </ButtonForm>
      </FormButtons>
    </form>
  </>
)

export default DeliveryForm
