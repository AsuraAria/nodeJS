function factoriel(m)
{
    if(m==0) return 1;
    if(m>0) return BigInt(m)*BigInt(factoriel(m-1));
    throw Error("Valeur négative");
}
try
{
    const n = 10438;
    console.time("Time");
    console.log(factoriel(n));
    console.log(console.timeEnd("Time"));
} catch (error){console.log(error);}