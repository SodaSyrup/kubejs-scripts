ServerEvents.tags('item', event => {
    
	const untaggedFoods = [ 'fetzisasiandeco:cooked_koi_fish', 'oceansdelight:cooked_guardian_tail', 'wildernature:cooked_pelican_meat', 'oceansdelight:cooked_elder_guardian_slice', 'oceansdelight:cooked_stuffed_cod', 'wildernature:cooked_bison_meat', 'wildernature:cooked_venison', 'wildernature:cooked_cassowary_meat', 'wildernature:cooked_turkey_meat', 'beachparty:cooked_mussel_meat', 'duckling:cooked_duck', 'farmersdelight:cooked_salmon_slice', 'farmersdelight:cooked_cod_slice', 'clutter:cooked_venison_ribs', 'clutter:cooked_chorus_echofin', 'clutter:cooked_levitating_echofin', 'clutter:cooked_venison', 'spawn:cooked_tuna_chunk'];
    
    event.add('c:foods', untaggedFoods)
});

ServerEvents.recipes(event => {
    event.remove({ type: 'minecraft:smelting', output: '#c:foods' })

});