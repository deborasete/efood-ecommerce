import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import DeliveryForm from '../../components/DeliveryForm'

const Delivery = () => {
  const navigate = useNavigate()

  // Esquema de validação Yup
  const validationSchema = Yup.object({
    nome: Yup.string().required('Informe quem irá receber'),
    rua: Yup.string().required('Informe a rua'),
    cidade: Yup.string().required('Informe a cidade'),
    cep: Yup.string()
      .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
      .required('Informe o CEP'),
    numero: Yup.string().required('Informe o número'),
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
    onSubmit: (values) => {
      console.log('Dados entrega:', values)
      alert('Entrega confirmada! Seguir para pagamento...')
    }
  })

  const handleBack = () => {
    navigate('/carrinho')
  }

  return <DeliveryForm formik={formik} onBack={handleBack} />
}

export default Delivery
