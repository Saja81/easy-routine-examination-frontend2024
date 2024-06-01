import * as React from "react"
import { useState } from "react"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Week2 = () => {
  const [inköp, setInköp] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [shoppingList, setShoppingList] = useState([])

  const addToShoppingList = item => {
    setInköp(prev => {
      const updatedList = [...prev, item]
      console.log("Inköpslistan:", updatedList)
      return updatedList
    })
  }

  const handleItemClick = item => {
    addToShoppingList(item)
    setSelectedItems(prev => [...prev, item])
  }

  const handleShoppinglistItemClick = item => {
    if (shoppingList.includes(item)) {
      setShoppingList(prev => prev.filter(vara => vara !== item))
    } else {
      setShoppingList(prev => [...prev, item])
    }
  }

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulInkopVecka2 {
        edges {
          node {
            vecka
            slug
            proteinMejeri {
              raw
            }
            skafferi {
              raw
            }
            kryddor {
              raw
            }
            fruktGrnt {
              raw
            }
          }
        }
      }
    }
  `)

  const weekData = data.allContentfulInkopVecka2.edges[0].node

  const renderList = (title, rawContent) => {
    const content = JSON.parse(rawContent)
    const items = content?.content || []

    return (
      <Stack alignItems="flex-start" direction="column" mb={2}>
        <Typography fontSize="12px" sx={{ textDecoration: "underline" }}>
          {title}
        </Typography>
        {items.map((item, index) => {
          const itemValue = item.content[0].value
          const isClicked = selectedItems.includes(itemValue)

          return (
            <Typography
              key={index}
              fontSize="12px"
              sx={{
                display: "block",
                color: isClicked ? "red" : "black",
              }}
              onClick={() => handleItemClick(itemValue)}
            >
              {itemValue}
            </Typography>
          )
        })}
      </Stack>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Typography fontSize="12px" fontWeight="bold" mb={1}>
          Inköp vecka
        </Typography>
        <Stack direction="row" gap={2}>
          {renderList("Protein och mejeri", weekData.proteinMejeri.raw)}
          {renderList("Skafferi", weekData.skafferi.raw)}
          {/* {renderList("Kryddor", weekData.kryddor.raw)} */}
          {renderList("Frukt & Grönt", weekData.fruktGrnt.raw)}
        </Stack>
        <Button variant="outlined" onClick={handleDialogOpen}>
          Handla
        </Button>
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "auto",
          }}
        >
          <DialogTitle>Inköpslista</DialogTitle>
          <DialogContent
            sx={{
              maxHeight: "500px", // Justera höjden efter behov
              overflowY: "auto",
            }}
          >
            {inköp.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  textDecoration: shoppingList.includes(item)
                    ? "line-through"
                    : "none",
                  textDecorationThickness: shoppingList.includes(item)
                    ? "2px" // Justera tjockleken här efter behov
                    : "initial", // Återgå till standardtjocklek om det inte är markerat
                }}
                onClick={() => handleShoppinglistItemClick(item)}
              >
                {item}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Stäng</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  )
}

export default Week2
