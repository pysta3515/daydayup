def upper_to_lower(line: str) -> str:
    return line.lower()


with (
    open(
        "/Users/pysta/project/golang/daydayup/the simpsons/the.simpsons.s01.e01.simpsons.roasting.on.an.open.fire.(1989).eng.1cd.(10004240)/Simpsons S01E01 Simpsons Roasting on an Open Fire.DVD.NonHI.pcc.en.20FOX-qwen.ass"
    ) as reader,
    open("lower.ass", "w") as writer,
):
    for line in reader:
        writer.write(line.lower())
