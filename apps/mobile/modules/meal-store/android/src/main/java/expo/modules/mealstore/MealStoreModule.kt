package expo.modules.mealstore

import android.content.Context
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.json.JSONObject

/** App-private, versioned local storage. No food log is sent to the backend. */
class MealStoreModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("MealStore")
    Function("load") {
      val context = appContext.reactContext ?: error("React context unavailable")
      context.getSharedPreferences("slugfuel_meals_v1", Context.MODE_PRIVATE)
        .getString("state", null)
    }
    Function("save") { json: String ->
      require(json.toByteArray(Charsets.UTF_8).size <= 2_000_000) { "Food log is full" }
      val state = JSONObject(json)
      require(state.getInt("version") == 1) { "Unsupported storage version" }
      require(state.getJSONArray("entries").length() <= 5000) { "Food log is full" }
      val context = appContext.reactContext ?: error("React context unavailable")
      val saved = context.getSharedPreferences("slugfuel_meals_v1", Context.MODE_PRIVATE)
        .edit().putString("state", json).commit()
      check(saved) { "Could not save food log" }
    }
  }
}
