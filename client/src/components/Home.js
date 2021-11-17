import React from "react";
import Screen from "../img/Pikachu_Female.gif";
import S from "../img/Butterfree_Female.gif";
import a from "../img/Charizard.gif";
import b from "../img/Lileep.gif";
import c from "../img/Lucario_Mega.gif";
import d from "../img/Luxio.gif";
import e from "../img/Umbreon.gif";
import f from "../img/Charmeleon.gif";
import g from "../img/Squirtle.gif";
import i from "../img/Sableye_Mega.gif";
import j from "../img/Sneasel.gif";
import k from "../img/Ponyta.gif";
import l from "../img/Prinplup.gif";
import m from "../img/Parasect.gif";
import n from "../img/Octillery_Female.gif";
import o from "../img/Oddish.gif";
import p from "../img/Beautifly_Female.gif";
import q from "../img/Marill.gif";
import r from "../img/Hoppip.gif";
import t from "../img/Caterpie.gif";
import u from "../img/Bellossom.gif";
import v from "../img/Politoed.gif";
import w from "../img/Nidoking.gif";
import x from "../img/Aipom.gif";
import y from "../img/Weedle.gif";
import z from "../img/Torkoal.gif";
import Style from "../components/Home.module.css";
import img from "../img/Venusaur.gif";
import img1 from "../img/Wailord.gif";
import im from "../img/Swalot_Female.gif";
import img2 from "../img/Taillow.gif";

import { NavLink } from "react-router-dom";

export function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   return () => {
  //     dispatch(getPoke());
  //   };
  // }, [dispatch]);

  return (
    <div>
      {/* <div className={Style.back} style={{ backgroundImage: `url(${img12})` }}> */}
      <img id="screen" src={Screen} alt="" height="auto" width="auto" />
      <img id="s" src={S} alt="" height="auto" width="auto" />
      <img id="a" src={a} alt="" height="auto" width="auto" />
      <img id="b" src={b} alt="" height="auto" width="auto" />
      <img id="c" src={c} alt="" height="auto" width="auto" />
      <img id="d" src={m} alt="" height="auto" width="auto" />
      <img id="e" src={e} alt="" height="auto" width="auto" />
      <img id="f" src={f} alt="" height="auto" width="auto" />
      <img id="g" src={g} alt="" height="auto" width="auto" />
      <img id="h" src={u} alt="" height="auto" width="auto" />
      <img id="i" src={i} alt="" height="auto" width="auto" />
      <img id="c" src={j} alt="" height="auto" width="auto" />
      <img id="k" src={k} alt="" height="auto" width="auto" />
      <img id="l" src={l} alt="" height="auto" width="auto" />
      <img id="im" src={im} alt="" height="auto" width="auto" />

      <button className={Style.button}>
        <NavLink className={Style.link} exact to="/pokemons">
          <h1>Gotta catch them all!</h1>
          <span>START</span>
        </NavLink>
      </button>

      <img id="l" src={d} alt="" height="auto" width="auto" />
      <img id="n" src={n} alt="" height="auto" width="auto" />
      <img id="o" src={o} alt="" height="auto" width="auto" />
      <img id="p" src={p} alt="" height="auto" width="auto" />
      <img id="q" src={q} alt="" height="auto" width="auto" />
      <img id="r" src={r} alt="" height="auto" width="auto" />
      <img id="t" src={t} alt="" height="auto" width="auto" />
      <img id="v" src={v} alt="" height="auto" width="auto" />
      <img id="w" src={w} alt="" height="auto" width="auto" />
      <img id="x" src={x} alt="" height="auto" width="auto" />
      <img id="y" src={y} alt="" height="auto" width="auto" />
      <img id="z" src={z} alt="" height="auto" width="auto" />
      <img id="img" src={img} alt="" height="auto" width="auto" />
      <img id="img1" src={img1} alt="" height="auto" width="auto" />
      <img id="img2" src={img2} alt="" height="auto" width="auto" />
    </div>
  );
}

export default Home;
