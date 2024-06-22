package com.fluchtens.stats;

import java.util.List;

import com.fluchtens.stats.models.Task;

public class JsonResponse {
    private String message;
    private List<Task> tasks;

    public JsonResponse(String message) {
        this.message = message;
    }

    public JsonResponse(List<Task> tasks) {
        this.tasks = tasks;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Task> getTasks() {
        return this.tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
