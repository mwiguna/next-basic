import { useRouter } from 'next/router'

const IndexProduct = () => {
    const router = useRouter()
    const { idProduct } = router.query
  
    return <p>Detail Product: {idProduct}</p>
  }

export default IndexProduct

// Url : product/idproduct_dinamis/review/idreview_dinamis