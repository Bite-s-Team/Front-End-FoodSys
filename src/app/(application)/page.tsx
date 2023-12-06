"use client";
import Image from "next/image";
import { FoodCard } from "@/components/FoodCards/FoodCard";
import image from "./image.jpeg";
import { Button } from "@/components/ui/Button";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const data = [
  {
    id: 1,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 2,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 4,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 5,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 6,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  }
]

import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/sea-green';

import '@splidejs/react-splide/css/core';

export default function Home() {
  return (
    <main className="font-sans">
      <section className="max-w-screen-2xl m-auto my-10">
        <h1 className="font-bold text-2xl text-zinc-700 my-4">Prepare para si</h1>
        <FoodCard.root>
          { data.map((card) => (
            <FoodCard.container key={card.id}>
              <FoodCard.imageContainer>
                <Image
                  src={card.image} 
                  alt="Imagem do prato"
                  className="w-full rounded-md"
                />
              </FoodCard.imageContainer>
              <FoodCard.title title={card.title}/>
              <FoodCard.price title={card.price}/>
            </FoodCard.container>
          ))

          }
        </FoodCard.root>
      </section>
      <section className="flex max-w-screen-2xl m-auto items-center justify-between">
        <div className="w-fit relative">
          <h2 className="absolute bottom-20 drop-shadow-2xl text-center w-full z-10 text-white font-bold text-4xl">Escolha uma das opçoes na sua cidade</h2>
          <Splide
            hasTrack={true}
            options={{
              type: "loop",
              perPage: 1,
              drag: true,
              gap: 8,
              fixedHeight: 500,
              fixedWidth: 800,
              flickMaxPages: 1,
              direction: "ttb",
              height: 500,
              width: 800,
              paginationDirection: "rtl",
              cover: true
            }}
          >
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
          </Splide>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-2xl flex items-center justify-center w-full text-orange-400 py-4 shadow-2xl bg-zinc-100 rounded-md">Recentemente Adicionados</h2>
          <FoodCard.root>
            <FoodCard.shadow>
              <Image
                src={image} 
                alt="Imagem do prato"
                className="w-full"
              />
              <FoodCard.details>
                <FoodCard.title title="Barbecue"/>
                <FoodCard.price title=" R$9,48"/>
              </FoodCard.details>
              <Button variant="cardButton">
                Adicionar no carrinho
              </Button>
            </FoodCard.shadow>
            <FoodCard.shadow>
              <Image
                src={image} 
                alt="Imagem do prato"
                className="w-full"
              />
              <FoodCard.details>
                <FoodCard.title title="Barbecue"/>
                <FoodCard.price title=" R$9,48"/>
              </FoodCard.details>
              <Button variant="cardButton">
                Adicionar no carrinho
              </Button>
            </FoodCard.shadow>
          </FoodCard.root>
        </div>
      </section>
      <section className="max-w-screen-2xl m-auto my-10">
        <FoodCard.root>
          { data.map((card) => (
            <FoodCard.container key={card.id}>
              <FoodCard.imageContainer>
                <Image
                  src={card.image} 
                  alt="Imagem do prato"
                  className="w-full rounded-md"
                />
              </FoodCard.imageContainer>
              <FoodCard.title title={card.title}/>
              <FoodCard.price title={card.price}/>
            </FoodCard.container>
          ))

          }
        </FoodCard.root>
      </section>
    </main>
  )
}
