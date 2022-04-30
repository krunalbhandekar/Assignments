let navbar = () => {
    return ` <div id="searchbar">
    <input type="text" id="query" placeholder="Search free high resolution photos">
</div>

<div id="div">

<div id="category">
    <h3 id="nature">Nature</h3>
    <h3 id="car">cars</h3>
    <h3 id="music">Music</h3>
    <h3 id="cartoons">Cartoons</h3>
    <h3 id="technology">Technology</h3>
</div>

<select id="select">
<option value="">Sort By</option>
<option value="latest">Latest</option>
<option value="relevant">Relevant</option>
</select>

<select id="filter">
<option value="">Filter By</option>
<option value="landscape">Landscape</option>
<option value="portrait">Portrait</option>
</select>
</div>`
}

export { navbar }