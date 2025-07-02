<!-- docs/Localization-Process.md -->

# Localization Process

## Supported Locales
`en-US`, `es-MX`, `pt-BR` initial; expansion every quarter.

## Pipeline
1. Extract strings with `react-intl` extractor  
2. Upload to Crowdin project `haevn-mobile`  
3. Professional translation SLA 48 h  
4. Screenshot QA via Crowdin In-Context  
5. OTA delivery of new locales via Locale SDK

## Plural Rules & RTL
* ICU MessageFormat for plurals  
* BiDi screenshots for Arabic when locale flag `rtl=true`
