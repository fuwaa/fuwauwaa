import { useEffect, useState } from "react";

function getDateTime() {
  let date: Date = new Date();

  let hour: number = date.getHours();
  let strHour: string = (hour < 10 ? "0" : "") + hour;
  let str: string;
  str = hour > 0 && hour <= 6 ? "it's too early, you should sleep more!" : "";
  str = hour > 6 && hour <= 11 ? "ohayo! you're up early!" : "";
  str = hour > 11 && hour <= 17 ? "good afternoon!" : "";
  str = hour > 17 && hour <= 21 ? "fancy of you visiting me at nightime!" : "";
  str = hour > 21 && hour <= 24 ? "you should probably get some sleep!" : "";
  return str + hour.toString();
}

// function randomTagline() {
//   let tagline: string[] = [
//     "need something?",
//     "fancy seeing you here!",
//     "looking for me?",
//     "need me?",
//     "or am i?",
//   ];

//   return tagline[Math.floor(Math.random() * tagline.length)];
// }

function randomKaomoji() {
  let kaomoji: string[] = [
    "(* ^ ω ^)",
    " (´ ∀ ` *)",
    " ٩(◕‿◕｡)۶",
    " ☆*:.｡.o(≧▽≦)o.｡.:*☆",
    "(o^▽^o)",
    " (⌒▽⌒)☆",
    " <(￣︶￣)>",
    " 。.:☆*:･'(*⌒―⌒*)))",
    "ヽ(・∀・)ﾉ",
    " (´｡• ω •｡`)",
    " (￣ω￣)",
    " ｀;:゛;｀;･(°ε° )",
    "(o･ω･o)",
    " (＠＾◡＾)",
    " ヽ(*・ω・)ﾉ",
    " (o_ _)ﾉ彡☆",
    "(^人^)",
    " (o´▽`o)",
    " (*´▽`*)",
    " ｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡",
    "( ´ ω ` )",
    " (((o(*°▽°*)o)))",
    " (≧◡≦)",
    " (o´∀`o)",
    "(´• ω •`)",
    " (＾▽＾)",
    " (⌒ω⌒)",
    " ∑d(°∀°d)",
    "╰(▔∀▔)╯",
    " (─‿‿─)",
    " (*^‿^*)",
    " ヽ(o^ ^o)ﾉ",
    "(✯◡✯)",
    " (◕‿◕)",
    " (*≧ω≦*)",
    " (☆▽☆)",
    "(⌒‿⌒)",
    " ＼(≧▽≦)／",
    " ヽ(o＾▽＾o)ノ",
    " ☆ ～('▽^人)",
    "(*°▽°*)",
    " ٩(｡•́‿•̀｡)۶",
    " (✧ω✧)",
    " ヽ(*⌒▽⌒*)ﾉ",
    "(´｡• ᵕ •｡`)",
    " ( ´ ▽ ` )",
    " (￣▽￣)",
    " ╰(*´︶`*)╯",
    "ヽ(>∀<☆)ノ",
    " o(≧▽≦)o",
    " (☆ω☆)",
    " (っ˘ω˘ς )",
    "＼(￣▽￣)／",
    " (*¯︶¯*)",
    " ＼(＾▽＾)／",
    " ٩(◕‿◕)۶",
    "(o˘◡˘o)",
    " (★ω★)/",
    " (^ヮ^)/",
    " (〃＾▽＾〃)",
    "(╯✧▽✧)╯",
    " o(>ω<)o",
    " o( ❛ᴗ❛ )o",
    " ｡ﾟ(TヮT)ﾟ｡",
    "( ‾́ ◡ ‾́ )",
    " (ﾉ´ヮ`)ﾉ*: ･ﾟ",
    " (b ᵔ▽ᵔ)b",
    " (๑˃ᴗ˂)ﻭ",
    "(๑˘︶˘๑)",
    " ( ˙꒳​˙ )",
    " (*꒦ິ꒳꒦ີ)",
    " °˖✧◝(⁰▿⁰)◜✧˖°",
    "(´･ᴗ･ ` )",
    " (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    " („• ֊ •„)",
    " (.❛ ᴗ ❛.)",
    "(⁀ᗢ⁀)",
    " (￢‿￢ )",
    " (¬‿¬ )",
    " (*￣▽￣)b",
    "( ˙▿˙ )",
    " (¯▿¯)",
    " ( ◕▿◕ )",
    " ＼(٥⁀▽⁀ )／",
    "(„• ᴗ •„)",
    " (ᵔ◡ᵔ)",
    " ( ´ ▿ ` )",
  ];

  return kaomoji[Math.floor(Math.random() * kaomoji.length)];
}

export default function Hero() {
  const [dateText, setDateText] = useState("");
  const [kaomoji, setKaomoji] = useState("");
  // const [tagline, setTagline] = useState("");

  useEffect(() => {
    setDateText(getDateTime());
    setKaomoji(randomKaomoji());
    // setTagline(randomTagline());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center relative text-[#cdd6f4]">
      <div className="mt-[20%] ml-[10%]">
        <h2 className="absolute text-9xl font-bold text-[#313244]">
          {kaomoji}
        </h2>
        <h1 className="relative font-normal text-7xl">
          hey! i&apos;m{" "}
          <span className="font-semibold text-[#cba6f7]">fuwa</span>!
        </h1>
        <h3 className="relative font-medium text-4xl text-[#a6adc8] mt-2">
          I make stuff go uwaa
        </h3>
        <p className="relative font-medium text-lg text-[#7f849c] my-5 pb-4 leading-loose text-justify max-w-lg">
          I'm a computer science student in Mapúa University based in Taguig. I
          do a lot of stuff ranging from system/network administration,
          developer operations, full-stack and game development, artificial
          intelligence and everything in between.
        </p>
        <div className="flex flex-row">
          <a
            className="text-[#cba6f7] mr-4 px-[30px] py-[10px] border border-solid border-[#cba6f7] rounded-full"
            href="mailto:jaque@mymail.mapua.edu.ph"
          >
            talk to me!
          </a>
          <a
            className="text-[#cba6f7] mr-4  px-[30px] py-[10px] border border-solid border-[#cba6f7] rounded-full"
            href="mailto:jaque@mymail.mapua.edu.ph"
          >
            mail me!
          </a>
          <a
            className="text-[#cba6f7] px-[30px] py-[10px] border border-solid border-[#cba6f7] rounded-full"
            href="mailto:jaque@mymail.mapua.edu.ph"
          >
            get my resume!
          </a>
        </div>
      </div>
    </div>
  );
}
