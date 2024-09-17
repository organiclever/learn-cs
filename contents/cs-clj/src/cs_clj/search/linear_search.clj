(ns cs-clj.search.linear-search)

(defn linear-search [coll target]
  (loop [index 0]
    (cond
      (>= index (count coll)) -1
      (= (nth coll index) target) index
      :else (recur (inc index)))))

(defn -main []
  (let [arr [3 1 4 1 5 9 2 6 5 3 5]
        target 6]
    (println "Array:" arr)
    (println "Searching for:" target)
    (let [result (linear-search arr target)]
      (if (= result -1)
        (println "Element not found")
        (println "Element found at index:" result)))))