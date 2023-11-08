import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const RedditDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((json) => setData(json.data.children));
  }, []);

  const extractInnerHtml = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || "";
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((item, index) => (
        <Card key={index} style={{ minWidth: 275, margin: 10, maxWidth: 320 }}>
          <CardContent>
    
            <Typography variant="h6" component="div">
              Title : {item.data.title}
            </Typography>

            <div dangerouslySetInnerHTML={{ __html: extractInnerHtml(item.data.selftext_html) }}/>
            
            <Typography variant="body2" color="text.secondary">
              URL : {item.data.url}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Score : {item.data.score}
            </Typography>

            
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RedditDisplay;
