export const Routes = {
    Home:"/",
    Books:"/books",
    Single_Book:{
        STATIC:"/book/:bookId",
        DYNAMIC:(bookId)=>`/book/${bookId}`,

    },
    Faq:"/faq",
}