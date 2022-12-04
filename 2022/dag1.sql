------------------------------------------------------
--                  part 1                          --
------------------------------------------------------
with recursive groep as(
select regelnr, 1 as groepId, regel from opdracht1 where regelnr =1
union all 
select o.regelnr, case when o.regel is null then groepId + 1 else groepId end, o.regel from opdracht1 o 
join groep on groep.regelnr = o.regelnr -1
) select sum(regel) from groep
group by groepId
order by 1 desc
limit 1;
------------------------------------------------------
--                  part 2                          --
------------------------------------------------------