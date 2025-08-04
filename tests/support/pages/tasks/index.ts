import { Locator, Page, expect } from "@playwright/test"
import { TaskModel } from "../../../interfaces/task.model"

export class TasksPage {
    readonly page: Page
    readonly inputTaskName: Locator

    constructor(page: Page,) {
        this.page = page
        this.inputTaskName = page.locator('#newTask')
    }

    async create(task: TaskModel) {
        await this.inputTaskName.fill(task.name)
        await this.page.click('css=button >> text=Create')
    }

    async go() {
        await this.page.goto('/')
    }

    async toggle(taskName: string) {
        const target = this.page.locator(`//p[text()="${taskName}"]/preceding-sibling::button[contains(@class,"Toggle")]`)
        await target.click()
    }

    async remove(taskName: string) {
        const target = this.page.locator(`//p[text()="${taskName}"]/following-sibling::button[contains(@class,"Delete")]`)
        await target.click()
    }

    async shouldHaveText(taskName: string) {
        const target = this.page.locator(`css=.task-item p >> text=${taskName}`)
        await expect(target).toBeVisible()
    }

    async shouldNotExist(taskName: string) {
        const target = this.page.locator(`css=.task-item p >> text=${taskName}`)
        await expect(target).not.toBeVisible()
    }

    async alertHaveText(text: string) {
        const target = this.page.locator('.swal2-html-container')
        await expect(target).toHaveText(text)
    }

    async shouldBeDone(taskName: string) {
        const target = this.page.getByText(taskName)
        await expect(target).toHaveCSS('text-decoration-line', 'line-through')
    }
}