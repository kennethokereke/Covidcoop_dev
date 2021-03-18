import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'


function Coviddata() {
    const [latest, setLatest] = useState([]);
    const [results, setResults] = useState([])
    const [searchCountries, setSearchCountries] = useState("")

    useEffect(() => {
        axios
        .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries")
        ])
       
        .then(responseArr =>{
         setLatest(responseArr[0].data)
         setResults(responseArr[1].data)

        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString()
    const filterCountries = results.filter(item=> {
        return searchCountries !== "" ? item.country.includes(searchCountries) : item
    })

    const countries = filterCountries.map((data, i) => {
        return (
            <Card
            key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{margin: "10px"}}
        >
            <Card.Img varient="top" src={data.countryInfo.flag}/>
            <Card.Body>

            <Card.Title>{data.country}</Card.Title>
            <Card.Text>Cases {data.cases}</Card.Text>
            <Card.Text>Death {data.deaths}</Card.Text>
            <Card.Text>Current Cases {data.todayCases}</Card.Text>
            <Card.Text>Current Deaths {data.todayDeaths}</Card.Text>
            <Card.Text>Current {data.active}</Card.Text>
            <Card.Text>Deatgs {data.critical}</Card.Text>

            </Card.Body>
            

        </Card>

        )
        
    })

    return (
        <div>
            <CardDeck
            style={{padding: 40}}>
                <Card 
                bg="secondary"
                text="white"
                className="text-center"
               
                >
                    <Card.Body>
                    <Card.Title>Cases</Card.Title>
                    <Card.Text>
                        {latest.cases}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small >Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card
                bg="danger"
                text="white"
                className="text-center"
                >
                    <Card.Body>
                    <Card.Title>Death</Card.Title>
                    <Card.Text>
                       {latest.deaths}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card
                bg="success"
                text="white"
                className="text-center"
                >
                    
                    <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>
                       {latest.deaths}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small >Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                <Form>
                    <Form.Group controlId="formGroupSearch">

                    <Form.Label>Search for a Country(USA is in all Caps)</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Search a Country"
                        onChange={e => setSearchCountries(e.target.value)} />
                    </Form.Group>
                </Form>
                <CardColumns
                style={{padding: 40}}
                >
                {countries}
                    </CardColumns>

        </div>
    )
}

export default Coviddata
