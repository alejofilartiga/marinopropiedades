const domain = process.env.WP_DOMAIN
const apiUrl = `${domain}/wp-json/wp/v2`
console.log(domain)

export const getPageInfo = async(slug: string) =>{
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`)
    if(!response.ok) throw new Error("Failed to fetch page info")

    const data = await response.json()
    console.log(data)
    
    return data
}