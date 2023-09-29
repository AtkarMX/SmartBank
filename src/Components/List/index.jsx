import React from "react";
import { Box, Boton } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = () =>{
    return <Box>
        {
            lista.cargos.map((cargo, index) => {
                return <Card key={index} cargo={cargo}/>
            })
        }
        <Boton>Ver más</Boton>
    </Box>
}

export default List;