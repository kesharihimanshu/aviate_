import React from "react";

//Images
import workhard from "../images/workhard.jpg";
import decentralization from "../images/decentralization.jpg";
import BlockchainPlatform from "../images/BlockchainPlatform.png";
import BitcoinSafe from "../images/Bitcoinsafe.jpg"
import Blockchainsafe from "../images/blockchainsafe.jpg"
import BlockchainUsed from "../images/BlockchainUsed.webp"
import Bitcoin from "../images/Bitcoin.jpg"
import convertedCash from "../images/convertedCash.png"
import BitcoinPlatform from "../images/BitcoinPlatform.jpg"
import Invention from "../images/Invention.png"
import Numbers from "../images/Numbers.webp"
import BitcoinBlockchain from "../images/BlockchainBitcoin.jpg"
import PCBitcoin from "../images/PCBitcoin.jpg"
import PCBlockchain from "../images/PCBlockchain.jpg"
import Mining from "../images/Mining.webp"

import { Icon } from "react-icons-kit";
import { circle } from "react-icons-kit/fa/circle";

export default function Tabs() {
  return (
   
    <section id="tabs-section" className="mt-3">
      <div className="container mt-5">
        <nav className="nav nav-tabs nav-justified justify-content-center">
          <a
            className="nav-item nav-link active md-2"
            data-toggle="tab"
            href="#whatisblockchain"
          >
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">What Is a Blockchain?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#Decentralization">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Blockchain Decentralization</span>
            </div>
          </a>
         
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#BlockchainPlatform">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">What Is a Blockchain Platform?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#Blockchainsafe">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1"> Blockchain Safe?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#BlockchainUsed">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">How Are Blockchains Used?</span>
            </div>
          </a>
        
          <a className="nav-item nav-link centered-label md-2" data-toggle="tab" href="#Bitcoin">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">What Is a Bitcoin?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#Mining">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Meaning of Bitcoin Mining</span>
            </div>
          </a>
         
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#convertedCash">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Can bitcoin converted to cash?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#BitcoinPlatform">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">What Is a Bitcoin Platform?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#BitcoinSafe">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Are bitcoins safe?</span>
            </div>
          </a>
         
          
         
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#Invention">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Invention</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#Numbers">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">How Many they Are?</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#PCBlockchain">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Pros and Cons (Blockchain) </span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#PCBitcoin">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Pros and Cons (Bitcoin)</span>
            </div>
          </a>
          <a className="nav-item nav-link md-2" data-toggle="tab" href="#BitcoinBlockchain">
            <div className="centered-label">
              <Icon size="24" icon={circle} className="mr-2" />
              <span className="mt-1">Bitcoin vs. Blockchain</span>
            </div>
          </a>
        </nav>
     
      <div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
     
     
        <div class="tab-content">
          {/* what is a blockchain? */}

          <div id="whatisblockchain" class="tab-pane fade show active">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={workhard}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                  What is a Blockchain?
                </div>
                <div className="p mt-3">
                A blockchain is a distributed database that is shared among the nodes of a
                 computer network. As a database, a blockchain stores information electronically
                  in digital format. Blockchains are best known for their crucial role in cryptocurrency
                   systems, such as Bitcoin, for maintaining a secure and decentralized record of 
                   transactions.The innovation with a blockchain is that it guarantees the fidelity
                    and security of a record of data and generates trust without the need for a trusted third party.
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-what-is-a-blockchain' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>

          {/* Blockchain Decentralization */}

          <div id="Decentralization" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2 rounded">
                <img
                  src={decentralization}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Blockchain Decentralization
                </div>
                <div className="p mt-3">
                A blockchain is a distributed database that is shared among the nodes of a
                 computer network. As a database, a blockchain stores information electronically
                  in digital format. Blockchains are best known for their crucial role in cryptocurrency
                   systems, such as Bitcoin, for maintaining a secure and decentralized record of 
                   transactions.The innovation with a blockchain is that it guarantees the fidelity
                    and security of a record of data and generates trust without the need for a trusted third party.
                </div>
                <button
                  type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                 
                >
                   <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-blockchain-decentralization' alt='Broken Link' 
                  className="text-secondary"> 
                  Explore Now</a>
                </button>
              </div>
              </div>
          </div>
          
          {/* What Is a Blockchain Platform? */}

          <div id="BlockchainPlatform" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={BlockchainPlatform}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                What Is a Blockchain Platform?
                </div>
                <div className="p mt-3">
                A blockchain platform allows users and developers to create novel uses of
                 an existing blockchain infrastructure. One example is Ethereum, which has 
                 a native cryptocurrency known as ether (ETH).16 But the Ethereum blockchain
                  also allows the creation of smart contracts and programmable tokens used in
                   initial coin offerings (ICOs), and non-fungible tokens (NFTs). These are all
                    built up around the Ethereum infrastructure and secured by nodes on the Ethereum 
                    network.
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-what-is-a-blockchain-platform' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>

      {/* Is Blockchain safe? */}
          <div id="Blockchainsafe" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={Blockchainsafe}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Is Blockchain Secure?
                </div>
                <div className="p mt-3">
                Blockchain technology achieves decentralized security and trust in several ways. 
                To begin with, new blocks are always stored linearly and chronologically. That is, 
                they are always added to the “end” of the blockchain. After a block has been added to
                 the end of the blockchain, it is extremely difficult to go back and alter the contents of 
                 the block unless a majority of the network has reached a consensus to do so. That’s because
                  each block contains its own hash, along with the hash of the block before it, as well as the
                   previously mentioned time stamp. Hash codes are created by a mathematical function that turns
                    digital information into a string of numbers and letters. If that information is edited in any way,
                     then the hash code changes as well.
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-is-blockchain-secure' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>

          {/* How Are Blockchains Used? */}

          <div id="BlockchainUsed" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={BlockchainUsed}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                How Are Blockchains Used?
                </div>
                <div className="p mt-3">
                As we now know, blocks on Bitcoin's blockchain store data about monetary transactions. Today, there are more than 10,000 other cryptocurrency systems running on blockchain. But it turns out that blockchain is actually a reliable way of storing data about other types of transactions as well.
Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, Siemens, Unilever, and a host of others. For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-how-are-blockchains-used' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>


           {/* What is a Bitcoin? */}

           <div id="Bitcoin" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={Bitcoin}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                What is a Bitcoin?
                </div>
                <div className="p mt-3">
                Bitcoin is a decentralized digital currency created in January 2009. It follows the ideas set out in a white paper by the mysterious and pseudonymous Satoshi Nakamoto.12
The identity of the person or persons who created the technology is still a mystery. Bitcoin offers the promise of lower transaction fees than traditional online payment mechanisms do, and unlike government-issued currencies, it is operated by a decentralized authority.
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/bitcoin.asp' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>


           {/* Can Bitcoin converted in cash? */}

           <div id="convertedCash" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={convertedCash}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Can Bitcoin converted in cash?
                </div>
                <div className="p mt-3">
                Cryptocurrency is now a popular investment option for younger people but you can't exactly spend your crypto in order to pay for your dinner. Well, you can if you want to choose from a few limited options (as big businesses get on board) but for the most part, people still need to convert their crypto into cash. The good news is that this is very easy to do. Having said that, there are several factors an individual might want to consider before converting their cryptocurrency into cash. Digital tokens are extremely volatile and their values fluctuate a lot so if your timing is wrong you potentially stand to lose money. On the other hand, a risk-averse investor, seeing the uncertainty around digital currencies, might consider converting their digital money to fiat currency.
                </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://gadgets360.com/cryptocurrency/features/convert-cryptocurrency-into-cash-explained-how-to-2511389' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         

         {/* What Is a Bitcoin Platform? */}

         <div id="BitcoinPlatform" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={BitcoinPlatform}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                What Is a Bitcoin Platform?
                </div>
                <div className="p mt-3">
                Crypto-trading platforms are exchange platforms which permit the interchange of a digital currency for another. It could also be the exchanging of a digital currency with fiat currency. The cryptocurrency market has witnessed the emergence of new trading platforms in the past few years.</div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://gadgets360.com/cryptocurrency/features/convert-cryptocurrency-into-cash-explained-how-to-2511389' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         

          {/* Are Bitcoins safe? */}

          <div id="BitcoinSafe" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={BitcoinSafe}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Are Bitcoins safe?
                </div>
                <div className="p mt-3">
                Bitcoin is a highly speculative investment. Just recently, the price of Bitcoin hit an all-time high of more than $68,000 in November of 2021 before sinking below $42,000 in early January. This is just one instance in the coin’s history of ups and downs.
According to John Griffin, professor of finance at the University of Texas McCombs School of Business, buying bitcoins more closely resembles gambling than investing. “Since the big players are the ones manipulating prices, the small guys get hurt,” he says. “Your odds are probably better in Vegas.”</div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://money.com/is-bitcoin-safe/' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         
         
          {/* Invension */}

          <div id="Invention" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={Invention}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Invention
                </div>
                <div className="p mt-3">
                  <h4>Who Invented Blockchain?</h4>
                  <p>Blockchain technology was first outlined in 1991 by Stuart Haber and W. 
                    Scott Stornetta, two mathematicians who wanted to implement a system where document
                     time stamps could not be tampered with. In the late 1990s, cypherpunk Nick Szabo proposed using 
                     a blockchain to secure a digital payments system, known as bit gold (which was never implemented).</p>
                     <h4>Who Invented Bitcoin?</h4>
                     <p>No one really knows who is behind the pseudonym <i>Satoshi Nakamoto</i> that has been credited as developing
                        the world's first and largest, cryptocurrency  Bitcoin. Nakamoto was the one who mined the first
                         blockchain of Bitcoin and was the one who published the whitepaper for the digital currency.</p>
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://money.com/is-bitcoin-safe/' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         
         
          {/* How Many Blockchain and Bitcoins are there? */}

          <div id="Numbers" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={Numbers}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                How Many Blockchain and Bitcoins are there?
                </div>
                <div className="p mt-3">
                  <h4>Blockchain</h4>
                  <p>The number of live blockchains is growing every day at an ever-increasing pace. 
                    As of 2022, there are more than 10,000 active cryptocurrencies based on blockchain, with
                     several hundred more non-cryptocurrency blockchains.</p>
                     <h4>Blockchain</h4>
                     <p>There are currently 18,925,137 bitcoins in existence. That means almost 19 million have been mined. 
                       The number typically changes about every 10 minutes as new blocks are mined.</p>
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.google.com/search?q=blockchain+and+bitcoins&source=lmns&bih=714&biw=1536&hl=en&sa=X&ved=2ahUKEwjT2dfI5eH2AhVBjNgFHbKrCf4Q_AUoAHoECAEQAA' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>


          {/* Prop And Cons */}

          <div id="PCBitcoin" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={PCBitcoin}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Prop And Cons(Bitcoin)
                </div>
                <div className="p mt-3">
                  <h4>Prop</h4>
                  <ul>
                    <li>Accessibility and liquidity</li>
                    <li>User anonymity and transparency</li>
                    <li>Independence from a central authority</li>
                    <li>High return potential</li>
                  </ul>
                  <h4>Cons</h4>
                  <ul>
                    <li>Volatility</li>
                    <li>No government regulations</li>
                    <li>Irreversible</li>
                    <li>limited Used</li>
                  </ul>
                 
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.google.com/search?q=prop+and+cons+for+bitcoins&source=lmns&bih=714&biw=1536&hl=en&sa=X&ved=2ahUKEwjdubjF8eH2AhWVR2wGHZxqBw8Q_AUoAHoECAEQAA' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         

         {/* Prop And Cons */}

         <div id="PCBlockchain" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={PCBlockchain}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Prop And Cons(Blockchain)
                </div>
                <div className="p mt-3">
                  <h4>Prop</h4>
                  <ul>
                    <li>Improved accuracy by removing human involvement in verification</li>
                    <li>Cost reductions by eliminating third-party verification</li>
                    <li>Decentralization makes it harder to tamper with</li>
                    <li>Transactions are secure, private, and efficient</li>
                    <li>Transparent technology</li>
                  </ul>
                  <h4>Cons</h4>
                  <ul>
                    <li>Significant technology cost associated with mining bitcoin</li>
                    <li>Low transactions per second</li>
                    <li>History of use in illicit activities, such as on the dark web</li>
                    <li>Regulation varies by jurisdiction and remains uncertain</li>
                    <li>Data storage limitations</li>
                  </ul>
                 
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.google.com/search?q=prop+and+cons+for+bitcoins&source=lmns&bih=714&biw=1536&hl=en&sa=X&ved=2ahUKEwjdubjF8eH2AhWVR2wGHZxqBw8Q_AUoAHoECAEQAA' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         
         
         
         {/* Bitcoin Vs Blockchain */}

         <div id="BitcoinBlockchain" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={BitcoinBlockchain}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Bitcoin vs Blockchain  
                </div>
                <div className="p mt-3">
                Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document time stamps could not be tampered with. But it wasn't until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.
The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that's fully peer-to-peer, with no trusted third party.”
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/blockchain.asp#toc-bitcoin-vs-blockchain' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         
          {/*Bitcoin Mining */}
          
          <div id="Mining" class="tab-pane fade show ">
            <div className="row mt-5 justify-content-start">
              <div className="col-12 col-lg-5 ml-2">
                <img
                  src={Mining}
                  width="400em"
                  alt="Work Hard"
                />
              </div>
              <div className="col-12 col-lg-4 ml-lg-5 ml-xl-2 ml-lg-0 mr-lg-5">
                <div className="h2 mt-2">
                Bitcoin Mining 
                </div>
                <div className="p mt-3">
                Bitcoin mining is the process by which Bitcoin is released into circulation. Generally, mining requires solving computationally difficult puzzles to discover a new block, which is added to the blockchain.
Bitcoin mining adds and verifies transaction records across the network. Miners are rewarded with some Bitcoin; the reward is halved every 210,000 blocks. The block reward was 50 new bitcoins in 2009. On May 11, 2020, the third halving occurred, bringing the reward for each block discovery down to 6.25 bitcoins.
               </div>
                <button
                   type="button"
                  class="btn btn-tertiary mt-4 mt-md-4 ml-1"
                >
                  <a href='https://www.investopedia.com/terms/b/bitcoin.asp#toc-bitcoin-mining' alt='Broken Link' 
                  className="text-muted"> 
                  Explore Now</a>
                 
                </button>
              </div>
            </div>
          </div>
         
         
          
        </div>
      </div>
    </section>
   
  );
}
