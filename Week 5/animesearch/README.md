# Over View

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## API (Jikan API)

Jikan (時間) is an open-source PHP & REST API for the “most active online anime + manga community and database” — MyAnimeList.net. It parses the website to satisfy the need for an API.


* communication was handeled using AXIOS
```java
    const response = await axios.get('https://api.jikan.moe/v4/anime',{
        params:{
            q:term,
            sfw:''
        }
    });
```

