import BlogPage from '../pages/blog-page'

describe('Blog', () => {
    it('Get the list of all Recent Post & check length item >10 & total rows = 4', async () => {
       

        //await browser.url('/blog')
        await BlogPage.open()
       // const listOfRecentPosts = await $$('#recent-posts-3 ul li')
        const listOfRecentPosts = await BlogPage.BlogComponent.linksOfRecentPosts
       

        for(const post of listOfRecentPosts) {
            const postText = await post.getText()
            await expect(postText.length).toBeGreaterThan(10)

        }
   
     await expect(listOfRecentPosts).toHaveLength(5)


  
})


})