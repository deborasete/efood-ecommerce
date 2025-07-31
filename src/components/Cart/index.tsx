import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { remove, close } from '../../store/reducers/cart'
import {
  CartContainer,
  Sidebar,
  CartItem,
  Footer,
  Overlay,
  ButtonCart,
  EmptyText
} from './styles'
import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import OrderConfirmed from '../OrderConfirmed'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmed'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [orderId, setOrderId] = useState('')

  const [step, setStep] = useState<Step>('cart')

  const closeCart = () => {
    setStep('cart')
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.price ?? 0), 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const validationSchema = Yup.object({
    nome: Yup.string().required(),
    rua: Yup.string().required(),
    cidade: Yup.string().required(),
    cep: Yup.string()
      .matches(/^\d{5}-\d{3}$/)
      .required(),
    numero: Yup.number().required(),
    complemento: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      nome: '',
      rua: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema,
    onSubmit: () => {
      setStep('payment')
    }
  })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <>
            {items.length === 0 ? (
              <EmptyText>
                O carrinho está vazio, adicione ao menos um produto para
                continuar com a compra.
              </EmptyText>
            ) : (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div>
                        <h4>{item.title}</h4>
                        <span>
                          R${' '}
                          {item.price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2
                          })}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </CartItem>
                  ))}
                </ul>
                <Footer>
                  <div className="total">
                    <span>Valor total</span>
                    <p>
                      R${' '}
                      {getTotalPrice().toLocaleString('pt-BR', {
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </div>
                  <ButtonCart type="button" onClick={() => setStep('delivery')}>
                    Continuar com a entrega
                  </ButtonCart>
                </Footer>
              </>
            )}
          </>
        )}

        {step === 'delivery' && (
          <DeliveryForm
            formik={formik}
            onBack={() => setStep('cart')}
            onNext={() => formik.handleSubmit()}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            amountToPay={getTotalPrice()}
            deliveryData={formik.values}
            onBack={() => setStep('delivery')}
            onOrderConfirmed={(id) => {
              setOrderId(id)
              setStep('confirmed')
            }}
          />
        )}

        {step === 'confirmed' && (
          <OrderConfirmed
            orderId={orderId}
            onConfirm={() => {
              setStep('cart')
              dispatch(close())
            }}
          />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
