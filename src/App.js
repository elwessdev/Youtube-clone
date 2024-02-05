import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";
import Search from "./Search";
import Channel from "./Channel";
import Video from "./Video";
// import Shorts from "./Shorts";

// const LazyHome = React.lazy(()=>import("./Home"));
// const LazySearch = React.lazy(()=>import("./Search"));
// const LazyChannel = React.lazy(()=>import("./Channel"));
// const LazyVideo = React.lazy(()=>import("./Video"));
// const LazyShorts = React.lazy(()=>import("./Shorts"));

function App() {
  
  return (
    <div className="App">
      {/* <Api /> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:qTxt" element={<Search />} />
            <Route path="/video/:vidId" element={<Video />} />
            <Route path="/channel/:channelId" element={<Channel />} />
            {/* <Route path="/shorts" element={<Shorts />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
