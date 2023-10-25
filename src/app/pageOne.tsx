"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/gsapHelper/isomophicEffect";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { decrement, increment } from "@/redux/features/counterSlice";

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();

  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const informationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const silhouetteRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    gsap.set(informationRefs.current[0], { yPercent: 100 });
    gsap.set(informationRefs.current[1], { yPercent: 100 });
    gsap.set(informationRefs.current[2], { yPercent: 100 });

    containerRefs.current.forEach((container, index) => {
      if (!container) return; // 컨테이너가 null이라면 무시

      let info = informationRefs.current[index];
      let silhouette = silhouetteRefs.current[index];
      let tl = gsap.timeline({ paused: true });

      tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

      container.addEventListener("mouseenter", () => tl.timeScale(1).play());
      container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });
  }, []);

  return (
    <>
      <Wrapper>
        <FirstContainer ref={(el) => (containerRefs.current[0] = el)}>
          <div className="silhouette">
            <div
              className="cover"
              ref={(el) => (silhouetteRefs.current[0] = el)}></div>
          </div>
          <div className="card">
            <h1>Who`s</h1>
            <div
              className="information"
              id="BulbasaurInfo"
              ref={(el) => (informationRefs.current[0] = el)}>
              <h2 id="BulbasaurName">Bulbasaur</h2>
              <p>
                Bulbasaur can be seen napping in bright sunlight. There is a
                seed on its back. By soaking up the sun&apos;s rays, the seed
                grows progressively larger.
              </p>
              <p className="type">
                Type:
                <button id="grass">Grass</button>
                <button id="poison">Poison</button>
              </p>
            </div>
          </div>
        </FirstContainer>
        <SecondContainer ref={(el) => (containerRefs.current[1] = el)}>
          <div className="silhouette">
            <div
              className="cover"
              ref={(el) => (silhouetteRefs.current[1] = el)}></div>
          </div>
          <div className="card">
            <h1>THAT</h1>
            <div
              className="information"
              id="CharmanderInfo"
              ref={(el) => (informationRefs.current[1] = el)}>
              <h2 id="CharmanderName">Charmander</h2>
              <p>
                The flame that burns at the tip of its tail is an indication of
                its emotions. The flame wavers when Charmander is enjoying
                itself. If the Pokémon becomes enraged, the flame burns
                fiercely.
              </p>
              <p className="type">
                Type: <button id="fire">Fire</button>
              </p>
            </div>
          </div>
        </SecondContainer>
        <ThirdContainer ref={(el) => (containerRefs.current[2] = el)}>
          <div className="silhouette">
            <div
              className="cover"
              ref={(el) => (silhouetteRefs.current[2] = el)}></div>
          </div>
          <div className="card">
            <h1>Pokémon?</h1>
            <div
              className="information"
              id="SquirtleInfo"
              ref={(el) => (informationRefs.current[2] = el)}>
              <h2 id="SquirtleName">Squirtle</h2>
              <p>
                Squirtle&apos;s shell is not merely used for protection. The
                shell&apos;s rounded shape and the grooves on its surface help
                minimize resistance in water, enabling this Pokémon to swim at
                high speeds.
              </p>
              <p className="type">
                Type: <button id="water">Water</button>
              </p>
            </div>
          </div>
        </ThirdContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #e5e5e5;
  color: #000;
`;

const FirstContainer = styled.div`
  width: 20%;
  min-width: 200px;
  max-width: 250px;
  height: 450px;
  float: left;
  margin: 0 10px;
  .silhouette {
    position: relative;
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
  }
  .silhouette .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png);
    background-position: center;
  }

  .type {
    text-align: justify;
    display: flex;
  }

  .card {
    background-color: white;
    height: calc(100% - 150px);
    align-self: center;
    border-radius: 10px;
    text-align: center;
    padding-top: 40%;
    box-shadow: 0px 0px 12px -1px black;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  h1 {
    font-family: Bebas Neue;
    letter-spacing: 2px;
    font-size: 30pt;
  }

  .information {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #BulbasaurInfo {
    border-top: 10px solid #9dcb58;
    border-bottom: 10px solid #9dcb58;
  }

  #BulbasaurName {
    border-bottom: dashed 2px #9dcb58;
  }

  button {
    width: 60px;
    height: auto;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 10pt;
  }

  #grass {
    background-color: #9dcb58;
  }

  #poison {
    background-color: #b881c8;
  }

  #fire {
    background-color: #fb7d34;
  }

  #water {
    background-color: #4993c2;
  }

  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10pt;
  }

  .type {
    text-align: justify;
  }
`;

const SecondContainer = styled.div`
  width: 20%;
  min-width: 200px;
  max-width: 250px;
  height: 450px;
  float: left;
  margin: 0 10px;
  .silhouette {
    position: relative;
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
  }
  .silhouette .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png);
    background-position: center;
  }

  .type {
    text-align: justify;
    display: flex;
  }

  .card {
    background-color: white;
    height: calc(100% - 150px);
    align-self: center;
    border-radius: 10px;
    text-align: center;
    padding-top: 40%;
    box-shadow: 0px 0px 12px -1px black;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  h1 {
    font-family: Bebas Neue;
    letter-spacing: 2px;
    font-size: 30pt;
  }

  .information {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #CharmanderName {
    border-bottom: dashed 2px #fb7d34;
  }

  #CharmanderInfo {
    border-top: 10px solid #fb7d34;
    border-bottom: 10px solid #fb7d34;
  }

  button {
    width: 60px;
    height: auto;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 10pt;
  }

  #grass {
    background-color: #9dcb58;
  }

  #poison {
    background-color: #b881c8;
  }

  #fire {
    background-color: #fb7d34;
  }

  #water {
    background-color: #4993c2;
  }

  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10pt;
  }

  .type {
    text-align: justify;
  }
`;

const ThirdContainer = styled.div`
  width: 20%;
  min-width: 200px;
  max-width: 250px;
  height: 450px;
  float: left;
  margin: 0 10px;
  .silhouette {
    position: relative;
    width: 100px;
    height: 100px;
    background-size: cover;
    margin: auto;
  }
  .silhouette .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png);
    background-position: center;
  }

  .type {
    text-align: justify;
    display: flex;
  }

  .card {
    background-color: white;
    height: calc(100% - 150px);
    align-self: center;
    border-radius: 10px;
    text-align: center;
    padding-top: 40%;
    box-shadow: 0px 0px 12px -1px black;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  h1 {
    font-family: Bebas Neue;
    letter-spacing: 2px;
    font-size: 30pt;
  }

  .information {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #SquirtleName {
    border-bottom: dashed 2px #4993c2;
  }

  #SquirtleInfo {
    border-top: 10px solid #4993c2;
    border-bottom: 10px solid #4993c2;
  }

  button {
    width: 60px;
    height: auto;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 10pt;
  }

  #grass {
    background-color: #9dcb58;
  }

  #poison {
    background-color: #b881c8;
  }

  #fire {
    background-color: #fb7d34;
  }

  #water {
    background-color: #4993c2;
  }

  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10pt;
  }

  .type {
    text-align: justify;
  }
`;
