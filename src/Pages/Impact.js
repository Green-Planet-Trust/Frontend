import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Navbars from './../Components/Navbars'
import './../impact.css';



class Impact extends Component {
    // Runs when the component is visibe 
    componentDidMount() {
        console.log("On About Page")
    }

    // Actually contains the HTML elements that are displayed 
    render() {
        // Notice that return must take one container (div) but can have lots inside
        return (
        <div className="Impact">
           
            <Navbars /> 
            <h1>Impact</h1>
            
            <br></br>
            <div className="text">
                <h2>
                    Why is climate change such a big problem?
                </h2>

                <p>
                    In the past few decades climate change has caused:
                </p>
                <li>
                    Increasing temperatures which have created worsened extreme weather.
                </li>

                <li>
                    Chunks of ice have melted and continue to melt not only displacing the artic species living there, but also rising the sea level.
                </li>

                <li>
                    Wildfire seasons are much longer.
                </li>

                <li>
                    Mosquitos have expanded their terroritory which has increased the spread of disease.
                </li>

                <br>
                     
                </br>

                <h2>
                    What caused these harmful changes?
                </h2>

                <li>
                    It's strongly related to humans consumption of fossil fuels and global deforestation.
                </li>

                <li>
                Earth has already warmed by about 1 degree Celsius, or 1.8 degrees Fahrenheit, since the 19th century, before industry started to boom.
                </li>

                <li>
                While we experience the effects, we’re on our way toward 1.5 degrees C (2.7 F) by as early as 2030.
                </li>

                <br></br>

                <h2>
                     Why .5 degrees is such a big deal
                </h2>

                <li>
                     A warmer world by a half-degree Celsius — has more evaporation, leading to more water in the atmosphere.
                     Such changing conditions put our agriculture, health, water supply and more at risk.
                     </li>


                     <li>
                     The increased evaporation and additional moisture to the atmosphere has led to 30% more intense rain during heavy downpours in that part of the U.S.                                         
                </li>

                <br></br>

                        <h2>
                    There's still time to act
                        </h2>



                <li>
                Whether it’s a shift of 1.5 degrees or 2 degrees, these warming levels aren’t magic thresholds. Every rise in warming is worse for the planet than the last.
                        </li>

<li>
                       It's not too late to slow the pace of climate change as long as we act today. With your help, we can attack this challenge.
</li>

<br></br>

                        <h2>
                    What else can I do to help climate change?
                        </h2>

                        <h5>
                     1. Switch to 100% green power

                    </h5>
                        <p>
Still haven’t switched to a green energy provider? Then now’s the time! Throughout the world, the use of energy represents by far the largest source of greenhouse gas emissions caused by human activity. Around two thirds of global greenhouse gas emissions are linked to burning fossil fuels for energy to be used for heating, electricity, transport and industry. And in Europe too, energy production and use, including the energy used in transport, accounts for some 80 percent of the EU's greenhouse gas emissions.
                        </p>
                        <h5>
2. Save Energy
                        </h5>
                        <p>
                        It might sound like the most original-sounding tip around, but it's as relevant as ever. Saving energy not only saves you money - it also helps to cut emissions too.
                        </p>
                        <h5>
                        3. Optimise your diet</h5>
                        <p> In the EU, meat and dairy production is estimated to be responsible for 12-17% of total greenhouse gas emissions, while throughout the world, the global livestock industry produces more greenhouse gas emissions than all cars, planes, trains and ships combined. That doesn't mean that everyone has to become vegan or vegetarian - even a small shift in diets, with a reduction in meat and dairy products, and more plant-based foods instead, could reduce the pressure that agriculture places on the environment.

When buying fruits and vegetables, try to buy organic wherever the options (and the price) will allow. Organic foods are usually not only healthier because they contain fewer harmful substances, but growing them also protects the environment and the climate. You could even go one step further and help support local organic farmers by signing up to receive a veggie box directly from people who grow the food nearby, thus also helping cut down on the emissions caused by transporting produce throughout the world.
                        </p>


                        <h5>
                        4. Avoid plastic wherever you can
                        </h5>
                        <p>
Plastic is the all-round material par excellence and is therefore present in pretty much every aspect of our lives. But the durability of the material (which also makes it so popular) is of course also it's most drastic disadvantage: we're struggling to get rid of it. Plastic has found its way pretty much everywhere - on streets, in rivers, on the beach, in cosmetics, in waste water, in our clothing, even in the air we breathe. And there's also a close connection between climate change and our massive global plastic problem. Almost every plastic is produced from fossil fuels - and in every single phase of its life cycle, plastic emits greenhouse gases. But there are already a lot of alternatives available.
                        </p>

                        <h5>
                       5. Sharing is caring! </h5>
                        <p> If we own less and use more things collectively, we need to produce fewer things - and that saves on resources. Sharing cars, exchanging clothes, lending and borrowing tools - there are multiple different possibilities for collective consumption are they're being used by millions of people worldwide.
                        </p>

                        <h5>
                    6. Protect our forests and plant more trees</h5>
                        <p> It has long been known how important forests are both for the microclimate in individual regions and for the global climate as a whole. They "feed" on CO2 and convert the climate-damaging gas into oxygen, which is vital for our survival. A research team at ETH Zurich has compiled some fascinating figures: Two thirds of man-made CO2 emissions could be removed from our atmosphere if we were to reforest 900 million hectares of forests worldwide. Forest restoration “isn’t just one of our climate change solutions, it is overwhelmingly the top one,” said the lead scientist, climate change ecologist Tom Crowther. But we should not only focus on reforestation measures, but also stop the deforestation of huge areas at the same time. European meat production also plays a decisive role in this context. Poultry, pigs and cattle are mostly fed with soya, which has grown on Brazilian soil - and tropical rainforest was previously found on these areas. So you can make a contribution by limiting your meat consumption.
                        </p>
                        <p> 
                        -
                        </p>

<h5> 
                        Sources
                        </h5>

                        <p> 
                        “This Is Why Fighting Climate Change Is so Urgent.” Environmental Defense Fund, www.edf.org/climate/why-fighting-climate-change-so-urgent.
                        </p>

                        <p>
                        Deutschland, Fridays for Future, et al. “12 Things You Can Do Right Now on Climate Change: Climate Protection.” RESET.to, en.reset.org/act/12-things-you-can-do-climate-change-0.
                        </p>




        </div>
        </div>
        )
    }
}

// Always need an export for others to access
export default Impact;



