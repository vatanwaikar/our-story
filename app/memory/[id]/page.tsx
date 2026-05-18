import Link from 'next/link'
import MemoryDetailClient from '@/components/memory-detail-client'

// All memories data
const memories: Record<string, any> = {
  'beginning': {
    id: 'beginning',
    date: 'jan 18, 2021',
    title: 'The Beginning',
description:
    'A quiet sunny day in Matheran. Just us, endless conversations, and the moment our story truly began.',    emoji: '🏔️',
fullStory:
    'Matheran still feels different in my memories because of that day.\n\nYou came there just to meet me, and honestly, I don’t think you’ll ever fully understand how special that felt to me. We didn’t go around exploring places. We didn’t do anything extravagant. We simply sat together for hours at one spot, talking about everything and nothing.\n\nBut somehow, that became one of the most beautiful moments of my life.\n\nThe way the air felt calmer around you.\nThe way time moved slowly.\nThe way every conversation felt effortless.\n\nThere were pauses between our talks, but even those silences felt comforting. It never felt awkward with you.\n\nAnd somewhere between those conversations, smiles, eye contact, and quiet moments… we confessed our feelings.\n\nNo grand setup.\nNo dramatic scene.\nJust two people sitting together honestly, finally accepting what their hearts already knew.\n\nThat was the day our story truly started.\n\nNot with noise.\nBut with peace.\n\nEven today, when I think about love, my mind still goes back to that simple moment in Matheran — where nothing extraordinary happened, yet everything changed forever.',
    photos: ['b3.jpeg', 'b2.jpeg', 'b1.jpeg'],
  },
  'anniversary-surprise': {
    id: 'anniversary-surprise',
    date: 'Jan 18, 2024',
    title: 'The Most Unexpected Surprise',
    description: 'A sleepy morning, one random call for tea, and suddenly you were standing right in front of me.',
    emoji: '✨',
fullStory:
    'That day started like any normal sleepy morning.\n\nI was sleeping peacefully when suddenly I got a call from Jivan.\nHe simply said,\n“chaha payla ye aplya spot vr.”\n\nI was still half asleep, confused about why he was suddenly calling me outside so early.\nBut somehow I went there.\n\nAnd then… I saw you.\n\nYou were sitting there with gaytri.\n\nFor a second, I genuinely couldn’t process what was happening. My sleep disappeared instantly.\nI still remember that exact feeling in my chest when I realized you had actually come there.\n\nI can’t explain how happy I felt in that moment.\nIt wasn’t just surprise.\nIt felt deeper than that.\n\nOut of nowhere, my entire day suddenly became beautiful.\n\nAfter that, we went to Dagdusheth together.\nThe whole atmosphere felt peaceful. Standing beside you there felt special in a way words can’t properly explain.\n\nThen we spent time at Shaniwar Wada.\nWe walked around, talked, laughed, and honestly… even the smallest moments felt important because they were happening with you.\n\nThere wasn’t anything overly dramatic about that day.\nNo grand plans.\nNo luxury.\n\nBut somehow, those simple few hours became one of the happiest memories of my life.\n\nAnd even today, whenever I think about unexpected happiness,\nmy mind still goes back to that sleepy morning…\nwhen I walked to a snack center for tea,\nand found you waiting there.',
    photos: ['a1.jpeg', 'a2.jpeg', 'a3.jpeg'],
  },
  'last-trip': {
    id: 'last-trip',
    date: 'Jun 21, 2025',
    title: 'The Last Trip',
    description: 'Rain, waterfalls, endless laughter, and moments we never knew would quietly become our last trip together.',
    emoji: '☔',
    fullStory: 'You had come to Pune one day earlier, and none of us knew that the next day would become one of the memories I’d hold onto the most.\n\nWe went to Naneghat with my office friends to see the waterfalls.\n\nThe weather was perfect.\nJust nonstop rain, cold wind, fog everywhere, and that peaceful feeling nature gives when everything around you slows down.\n\nWe clicked so many photos.\nRecorded random videos.\nLaughed over small things.\nEnjoyed those simple moments without thinking too much about time.\n\nI still remember watching you enjoy the rain, smiling freely, completely lost in the moment.\n\nNothing felt heavy that day.\nNo overthinking.\nNo stress.\nJust happiness.\n\nAnd maybe that’s why this memory hurts differently now.\n\nBecause none of us knew…\nthat this would quietly become our last trip together.\n\nThose videos stayed in the gallery.\nThose pictures stayed unfinished.\nWe never really got the chance to post them properly.\n\nBut maybe some memories become too personal for the world anyway.\n\nEven today, when it rains heavily or the weather suddenly turns cold and peaceful, my mind automatically goes back to Naneghat.\n\nTo the waterfalls.\nTo the fog.\nTo the random videos.\nTo you.\n\nAnd somewhere inside me, that trip still feels incomplete…\nlike a beautiful moment that ended too soon.',
    photos: ['l1.jpeg', 'l2.jpeg', 'l3.jpeg'],
  },
  
  
  'last-fight-that-turned-into-distance': {
    id: 'last-fight-that-turned-into-distance',
    date: 'july 12, 2025',
    title: 'Last Fight That Turned Into Distance',
    description: 'One small misunderstanding slowly became silence… and silence slowly became distance.',
    emoji: '💔',
    fullStory: 'Sometimes relationships don’t break because of one huge reason.\n\nSometimes it starts with one small moment.\nOne misunderstanding.\nOne reaction.\nOne hurt feeling.\n\nThat day, you had posted a story regarding me.\nAnd honestly… I didn’t like it.\n\nMaybe I reacted emotionally.\nMaybe I handled it badly.\nMaybe both of us were already carrying unspoken frustration inside.\n\nWhat started as a small argument slowly became something bigger.\n\nThe conversation changed.\nThe energy changed.\nAnd after that fight, something between us quietly shifted.\n\nWe still talked.\nBut not the same way.\n\nThe comfort slowly reduced.\nThe understanding became weaker.\nAnd without realizing it, distance slowly entered our relationship.\n\nLooking back now, the fight itself probably wasn’t even that important.\nIt was the silence after it that hurt the most.\n\nBecause somewhere between ego, misunderstandings, and emotions,\nwe slowly stopped reaching each other properly.\n\nAnd maybe that’s what hurts me even today.\n\nNot the argument.\nBut the fact that something so small eventually created such a big distance between us.',
    photos: ['airport-goodbye.jpg', 'embrace-last.jpg', 'empty-gate.jpg'],
  },
  'growing-apart': {
    id: 'growing-apart',
    date: 'August 15, 2025',
    title: 'Growing Apart',
    description: 'We were still together, but something was shifting. I felt it too.',
    emoji: '🌊',
    fullStory: 'The hardest part wasn\'t the day we broke up—it was the slow fade. We were still together, still trying, but we were becoming strangers. Your voice on FaceTime felt distant even though I could hear it perfectly. We ran out of things to say. The connection that once felt electric was becoming routine. We were both feeling it, circling each other carefully, hoping the other would find a way to fix it. But sometimes love isn\'t broken—it\'s just changing. And we were too scared to admit that maybe it was changing into something it couldn\'t be anymore.',
    photos: ['late-night-call.jpg', 'empty-texts.jpg', 'distance-portrait.jpg'],
  },
  'the-break': {
    id: 'the-break',
    date: 'october 30, 2025',
    title: 'The Break',
    description: 'It wasn\'t dramatic. Just... necessary. Like seasons changing.',
    emoji: '🍂',
    fullStory: 'When we finally said the words, it didn\'t feel like a fight or a tragedy. It felt like autumn—natural, necessary, inevitable. We sat across from each other and said, "I love you, but this isn\'t working." There was no yelling, no blame. Just two people who loved each other deeply but weren\'t enough for each other at this moment. We cried, but they were gentle tears. The tears you cry when something beautiful ends. We held each other one last time and said goodbye not with anger, but with gratitude for everything we\'d been to each other. It was the most loving breakup I\'ve ever experienced.',
    photos: ['final-coffee.jpg', 'goodbye-embrace.jpg', 'autumn-leaves.jpg'],
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function MemoryDetailPage({ params }: PageProps) {
  const { id } = await params
  const memory = memories[id]

  if (!memory) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Memory not found</h1>
          <Link href="/" className="text-accent hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return <MemoryDetailClient memory={memory} />
}
