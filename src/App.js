import Header from "./components/Header";
import LeftSideComp from "./components/LeftSideComp";
import Post from "./components/Post";
import PostDisplay from "./components/PostDisplay";

function App() {
  return (
    <div className="App bg-gray-300 h-full w-full ">
         <Header />
         <div className="flex flex-row "> 
         <div>
         <LeftSideComp />
         </div>
         <div>
            <Post /> 
            <PostDisplay />

         
         </div>

         </div>

   
      
   
    </div>
  );
}

export default App;
