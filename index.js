import * as d3 from "d3"

const svg  = d3.select('svg');

svg 
    .append('circle')
    .attr('cx', '50%')
    .attr('cy', '50%')
    .attr('r', '20')
    .style('fill', 'green')


for (let point of data) {
    svg.append('circle');
}    

const rides = [
    { name: "c", speed: 23 },
    { name: "e", speed: 56 },
    { name: "b", speed: 68 },
    { name: "m", speed: 99 }
];

svg.selectAll().data(rides)

svg.selectAll()
    .data(rides)
    .enter()
    .update()
    .exit()



const xscale = d3
    .scaleBand()
    .range()
    .domain()


d3.select("rect")
    .transition()
    .duration(2000)
    .sttr('width', '400')



d3.select('rect')
    .on('mouseover', ()=> showToolTip() )
