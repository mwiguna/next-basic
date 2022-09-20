import { useRouter } from 'next/router'
import Link from 'next/link'

const IndexReview = () => {
    const router = useRouter()
    const { params = [] } = router.query // == [] adalah set default value
  
    return <>
      <ul>
          <li>
              <Link href={`/product/${params[0]}`}> 
                  <a>Produk {params[0]}</a>
              </Link>
          </li>
          <li>
              <Link href={`/product/${params[1]}`} replace>  
                  <a>Produk {params[1]}</a>
              </Link>
          </li>
      </ul>
    </>
}

export default IndexReview

// replace jika back langsung ke home (pushOffAll)