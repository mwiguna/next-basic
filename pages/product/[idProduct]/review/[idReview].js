import { useRouter } from 'next/router'

const IndexReview = () => {
    const router = useRouter()
    const { idProduct, idReview } = router.query
  
    return <>
      <p>Product: {idProduct}</p>
      <p>Review: {idReview}</p>
      
    </>
}

export default IndexReview