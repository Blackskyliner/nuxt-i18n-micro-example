<template>
    <div>
        <I18nSwitcher></I18nSwitcher>
        <h2>{{ $t('layout.default.header') }}</h2>
        <h3><small>{{ $t('layout.default.slogan') }}</small></h3>
        <div style="border: 1px solid black">
            <slot></slot>
        </div>
    </div>
</template>