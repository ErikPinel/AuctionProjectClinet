import REact,{useState,useEffect} from 'react'
import axios from 'axios';
import { Items } from '../PaginationComp/Items';
import  PaginationPage from '../PaginationComp/Pagination';


function DisplayItemWomen()
{
  const[posts,setPosts]=useState([]);
  const[loading,setloading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const[postPerPage,setPostPerPage]=useState(4);
  const[logId,setLogId]=useState();
    
  useEffect(()=>{
    const fetchPosts= async()=>{
        setloading(true);
        axios.get("/api-itemWomen/itemwomen").then((res) => {

        setPosts(res.data);
        setloading(false)
        localStorage.getItem("logged");
            
            })
    }
fetchPosts()

  },[]);

  const paginate =pageNumber=> setCurrentPage(pageNumber)



  

  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPost=indexOfLastPost-postPerPage;
  const currentPost=posts.slice(indexOfFirstPost,indexOfLastPost)
return(

<div className='display-container-women'>

<Items posts={currentPost} loading={loading}></Items>
<PaginationPage paginate={paginate} postPerPage={postPerPage} totalPosts={posts.length}></PaginationPage>


</div>

)

}

export default DisplayItemWomen;