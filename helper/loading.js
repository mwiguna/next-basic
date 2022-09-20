import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

function HelperLoading(){
    const [loading, setLoading] = useState(false)    
    const startLoading = () => helper.setLoading(true)
    const router = useRouter()

    // Detect Back or Forward
    useEffect(() => {
        router.beforePopState(({ path }) => {
            helper.setLoading(true)
            return true
        });
    }, [router]);

    const helper = {
        loading: loading,
        setLoading: setLoading,
        startLoading: startLoading,
    }

    return helper
}

export default HelperLoading