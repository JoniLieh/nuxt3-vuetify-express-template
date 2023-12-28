<template>
	<div>
		<NuxtPwaManifest />

		<NuxtLoadingIndicator />
		
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
	import { useTheme } from 'vuetify'
	const theme = useTheme()

	if (process.client) {
		// auto toggle theme mode
		setTimeout(() => {
			// theme.global.name.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}, 200);
	}
</script>