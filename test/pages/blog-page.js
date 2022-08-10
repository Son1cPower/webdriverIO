import BlogComponent from './components/blog-comp'

class BlogPage {
    open() {
        return browser.url('/blog')
    }

    get BlogComponent() {
        return BlogComponent
    }
  

}



export default new BlogPage()