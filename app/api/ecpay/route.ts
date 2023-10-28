import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request, { params }: { params: any }) {
  const body = await request.json()
  console.log('params', body)
  console.log('geeg', process.env.NEXT_PUBLIC_ECPAY_URL)

  const ecpayParams = {
    MerchantID: '',
    MerchantTradeNo: '',
    MerchantTradeDate: '',
    PaymentType: 'aio',
    TotalAmount: '',
    TradeDesc: '',
    ItemName: '',
    ReturnURL: 'http://localhost:3000/api/receiver',
    CheckMacValue: '',
    EncryptType: 1,
    ClientBackURL: 'http://localhost:3000/',
    ChoosePayment: 'ALL',
  }

  const result = await axios.post(
    process.env.NEXT_PUBLIC_ECPAY_URL || '',
    ecpayParams
  )

  console.log('result', result)

  return NextResponse.json({
    data: true,
  })
}
