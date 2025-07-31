import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'

import {
  Label,
  Input,
  Title,
  DoubleInput,
  FormButtons,
  ButtonForm
} from './styles'
import ErrorText from '../ErrorText'

interface DeliveryData {
  nome: string
  rua: string
  cidade: string
  cep: string
  numero: string
  complemento: string
}

interface Props {
  onBack: () => void
  amountToPay: number
  onOrderConfirmed: (orderId: string) => void
  deliveryData: DeliveryData
}

const PaymentForm = ({
  onBack,
  amountToPay,
  onOrderConfirmed,
  deliveryData
}: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required(),
      cardNumber: Yup.string().required(),
      cvv: Yup.string().required(),
      expiryMonth: Yup.string().required(),
      expiryYear: Yup.string().required()
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://ebac-fake-api.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              products: items.map((item) => ({
                id: item.id,
                price: item.price
              })),
              delivery: {
                receiver: deliveryData.nome,
                address: {
                  description: deliveryData.rua,
                  city: deliveryData.cidade,
                  zipCode: deliveryData.cep,
                  number: Number(deliveryData.numero),
                  complement: deliveryData.complemento
                }
              },
              payment: {
                card: {
                  name: values.cardName,
                  number: values.cardNumber,
                  code: Number(values.cvv),
                  expires: {
                    month: Number(values.expiryMonth),
                    year: Number(values.expiryYear)
                  }
                }
              }
            })
          }
        )

        if (!response.ok) {
          const erroTexto = await response.text()
          throw new Error(`Erro da API: ${erroTexto}`)
        }
        const data = await response.json()
        dispatch(clear())
        onOrderConfirmed(data.pedidoId || data.orderId || '000')
      } catch (error) {
        alert('Erro ao processar pagamento. Tente novamente.')
        console.error(error)
      }
    }
  })

  const hasAnyEmptyField =
    formik.submitCount > 0 &&
    (!formik.values.cardName ||
      !formik.values.cardNumber ||
      !formik.values.cvv ||
      !formik.values.expiryMonth ||
      !formik.values.expiryYear)

  return (
    <>
      <Title>
        Pagamento - Valor a pagar R${' '}
        {amountToPay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </Title>

      <form onSubmit={formik.handleSubmit}>
        <Label>
          Nome no cartão
          <Input
            type="text"
            name="cardName"
            placeholder="Nome escrito no cartão"
            value={formik.values.cardName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={hasAnyEmptyField && !formik.values.cardName}
          />
        </Label>

        <DoubleInput>
          <Label flexGrow>
            Número do cartão
            <InputMask
              mask="9999 9999 9999 9999"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  type="text"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  hasError={hasAnyEmptyField && !formik.values.cardNumber}
                  className="large-input"
                />
              )}
            </InputMask>
          </Label>
          <Label>
            CVV
            <InputMask
              mask="999"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  type="text"
                  name="cvv"
                  placeholder="000"
                  hasError={hasAnyEmptyField && !formik.values.cvv}
                  className="small-input"
                />
              )}
            </InputMask>
          </Label>
        </DoubleInput>

        <DoubleInput>
          <Label>
            Mês de vencimento
            <InputMask
              mask="99"
              value={formik.values.expiryMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  type="text"
                  name="expiryMonth"
                  placeholder="MM"
                  hasError={hasAnyEmptyField && !formik.values.expiryMonth}
                />
              )}
            </InputMask>
          </Label>
          <Label>
            Ano de vencimento
            <InputMask
              mask="99"
              value={formik.values.expiryYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  type="text"
                  name="expiryYear"
                  placeholder="AA"
                  hasError={hasAnyEmptyField && !formik.values.expiryYear}
                />
              )}
            </InputMask>
          </Label>
        </DoubleInput>

        {hasAnyEmptyField && (
          <ErrorText>Campos obrigatórios não preenchidos</ErrorText>
        )}

        <FormButtons>
          <ButtonForm type="submit">Finalizar pagamento</ButtonForm>
          <ButtonForm type="button" onClick={onBack}>
            Voltar para a edição de endereço
          </ButtonForm>
        </FormButtons>
      </form>
    </>
  )
}

export default PaymentForm
