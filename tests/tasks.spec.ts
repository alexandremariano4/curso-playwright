import { test , expect } from '@playwright/test'

test('deve poder cadastrar uma nova task', async ({page}) =>{
    await page.goto('http:localhost:8080')

    await page.fill('#newTask','Ler um livro de TypeScript')
})