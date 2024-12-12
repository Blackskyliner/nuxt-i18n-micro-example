<script setup lang="ts">
import ComponentTranslation from '~/components/ComponentTranslation.vue';
</script>

<template>
    <h1>{{ $t('startpage_title') }}</h1>
    <ul>
        <li>
            <I18nLink to="/pageA">Page A</I18nLink>
        </li>
        <li>
            <I18nLink to="/pageB">Page B</I18nLink>
        </li>
    </ul>
    <hr>
    <p>ComponentTranslation</p>
    <ComponentTranslation></ComponentTranslation>
</template>