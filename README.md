# PokeApi

To use the pokeApi I had to figure out how to fetch data and what I received. I realized that there were some ways to filter information but I was having problems
on trying to get only the name of the pokemon and the image.

Solution: Since I needed multiple pokémons, I used Promise.all() + fetch(), in an useEffect on mounting of the Table component. This gives an array of results once all request are resolved, then I filtered the informations by creating a mapped array with the info I needed ({id, name, img}).
I used the names to be more specific. With Ids I would probably get the same pokémon in a different evolution.
