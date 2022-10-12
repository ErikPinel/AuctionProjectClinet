import REact,{useState,useEffect} from 'react'
import axios from 'axios';
import { Items } from '../PaginationComp/Items';
import  PaginationPage from '../PaginationComp/Pagination';


function DisplayItemKids()
{
  const[posts,setPosts]=useState([]);
  const[loading,setloading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const[postPerPage,setPostPerPage]=useState(6);
  const[logId,setLogId]=useState();
  const[filter,setFilter]=useState();
    
  useEffect(()=>{
    
    const fetchPosts= async()=>{
        setloading(true);
        axios.get("/api-itemKids/itemkids").then((res) => {

        setPosts(res.data);
        setloading(false)
        localStorage.getItem("logged");
            
            })
    }


    const fetchPostsLtoH= async()=>{
      setloading(true);
      axios.get("/api-itemKids/itemkids").then((res) => {

      setPosts(res.data);
      setloading(false)
      localStorage.getItem("logged");
          
          })
  }


    
fetchPosts()

  },[filter]);

  const paginate =pageNumber=> setCurrentPage(pageNumber)



  

  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPost=indexOfLastPost-postPerPage;
  const currentPost=posts.slice(indexOfFirstPost,indexOfLastPost)
return(

<div className='display-container-women'>

<Items posts={currentPost} loading={loading} filter={filter}></Items>
<PaginationPage paginate={paginate} postPerPage={postPerPage} totalPosts={posts.length}></PaginationPage>


</div>

)

}

export default DisplayItemKids;